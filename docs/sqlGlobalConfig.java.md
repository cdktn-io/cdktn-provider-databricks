# `sqlGlobalConfig` Submodule <a name="`sqlGlobalConfig` Submodule" id="@cdktn/provider-databricks.sqlGlobalConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SqlGlobalConfig <a name="SqlGlobalConfig" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/sql_global_config databricks_sql_global_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.Initializer"></a>

```java
import io.cdktn.providers.databricks.sql_global_config.SqlGlobalConfig;

SqlGlobalConfig.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .dataAccessConfig(java.util.Map<java.lang.String, java.lang.String>)
//  .enableServerlessCompute(java.lang.Boolean|IResolvable)
//  .googleServiceAccount(java.lang.String)
//  .id(java.lang.String)
//  .instanceProfileArn(java.lang.String)
//  .providerConfig(SqlGlobalConfigProviderConfig)
//  .securityPolicy(java.lang.String)
//  .sqlConfigParams(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.Initializer.parameter.dataAccessConfig">dataAccessConfig</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/sql_global_config#data_access_config SqlGlobalConfig#data_access_config}. |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.Initializer.parameter.enableServerlessCompute">enableServerlessCompute</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/sql_global_config#enable_serverless_compute SqlGlobalConfig#enable_serverless_compute}. |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.Initializer.parameter.googleServiceAccount">googleServiceAccount</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/sql_global_config#google_service_account SqlGlobalConfig#google_service_account}. |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/sql_global_config#id SqlGlobalConfig#id}. |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.Initializer.parameter.instanceProfileArn">instanceProfileArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/sql_global_config#instance_profile_arn SqlGlobalConfig#instance_profile_arn}. |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.Initializer.parameter.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfigProviderConfig">SqlGlobalConfigProviderConfig</a></code> | provider_config block. |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.Initializer.parameter.securityPolicy">securityPolicy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/sql_global_config#security_policy SqlGlobalConfig#security_policy}. |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.Initializer.parameter.sqlConfigParams">sqlConfigParams</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/sql_global_config#sql_config_params SqlGlobalConfig#sql_config_params}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `dataAccessConfig`<sup>Optional</sup> <a name="dataAccessConfig" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.Initializer.parameter.dataAccessConfig"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/sql_global_config#data_access_config SqlGlobalConfig#data_access_config}.

---

##### `enableServerlessCompute`<sup>Optional</sup> <a name="enableServerlessCompute" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.Initializer.parameter.enableServerlessCompute"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/sql_global_config#enable_serverless_compute SqlGlobalConfig#enable_serverless_compute}.

---

##### `googleServiceAccount`<sup>Optional</sup> <a name="googleServiceAccount" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.Initializer.parameter.googleServiceAccount"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/sql_global_config#google_service_account SqlGlobalConfig#google_service_account}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/sql_global_config#id SqlGlobalConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instanceProfileArn`<sup>Optional</sup> <a name="instanceProfileArn" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.Initializer.parameter.instanceProfileArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/sql_global_config#instance_profile_arn SqlGlobalConfig#instance_profile_arn}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.Initializer.parameter.providerConfig"></a>

- *Type:* <a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfigProviderConfig">SqlGlobalConfigProviderConfig</a>

provider_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/sql_global_config#provider_config SqlGlobalConfig#provider_config}

---

##### `securityPolicy`<sup>Optional</sup> <a name="securityPolicy" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.Initializer.parameter.securityPolicy"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/sql_global_config#security_policy SqlGlobalConfig#security_policy}.

---

##### `sqlConfigParams`<sup>Optional</sup> <a name="sqlConfigParams" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.Initializer.parameter.sqlConfigParams"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/sql_global_config#sql_config_params SqlGlobalConfig#sql_config_params}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.putProviderConfig">putProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.resetDataAccessConfig">resetDataAccessConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.resetEnableServerlessCompute">resetEnableServerlessCompute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.resetGoogleServiceAccount">resetGoogleServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.resetInstanceProfileArn">resetInstanceProfileArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.resetProviderConfig">resetProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.resetSecurityPolicy">resetSecurityPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.resetSqlConfigParams">resetSqlConfigParams</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putProviderConfig` <a name="putProviderConfig" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.putProviderConfig"></a>

```java
public void putProviderConfig(SqlGlobalConfigProviderConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfigProviderConfig">SqlGlobalConfigProviderConfig</a>

---

##### `resetDataAccessConfig` <a name="resetDataAccessConfig" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.resetDataAccessConfig"></a>

```java
public void resetDataAccessConfig()
```

##### `resetEnableServerlessCompute` <a name="resetEnableServerlessCompute" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.resetEnableServerlessCompute"></a>

```java
public void resetEnableServerlessCompute()
```

##### `resetGoogleServiceAccount` <a name="resetGoogleServiceAccount" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.resetGoogleServiceAccount"></a>

```java
public void resetGoogleServiceAccount()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.resetId"></a>

```java
public void resetId()
```

##### `resetInstanceProfileArn` <a name="resetInstanceProfileArn" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.resetInstanceProfileArn"></a>

```java
public void resetInstanceProfileArn()
```

##### `resetProviderConfig` <a name="resetProviderConfig" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.resetProviderConfig"></a>

```java
public void resetProviderConfig()
```

##### `resetSecurityPolicy` <a name="resetSecurityPolicy" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.resetSecurityPolicy"></a>

```java
public void resetSecurityPolicy()
```

##### `resetSqlConfigParams` <a name="resetSqlConfigParams" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.resetSqlConfigParams"></a>

```java
public void resetSqlConfigParams()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SqlGlobalConfig resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.isConstruct"></a>

```java
import io.cdktn.providers.databricks.sql_global_config.SqlGlobalConfig;

SqlGlobalConfig.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.isTerraformElement"></a>

```java
import io.cdktn.providers.databricks.sql_global_config.SqlGlobalConfig;

SqlGlobalConfig.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.isTerraformResource"></a>

```java
import io.cdktn.providers.databricks.sql_global_config.SqlGlobalConfig;

SqlGlobalConfig.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.generateConfigForImport"></a>

```java
import io.cdktn.providers.databricks.sql_global_config.SqlGlobalConfig;

SqlGlobalConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),SqlGlobalConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a SqlGlobalConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the SqlGlobalConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing SqlGlobalConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/sql_global_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the SqlGlobalConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfigProviderConfigOutputReference">SqlGlobalConfigProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.dataAccessConfigInput">dataAccessConfigInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.enableServerlessComputeInput">enableServerlessComputeInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.googleServiceAccountInput">googleServiceAccountInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.instanceProfileArnInput">instanceProfileArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.providerConfigInput">providerConfigInput</a></code> | <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfigProviderConfig">SqlGlobalConfigProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.securityPolicyInput">securityPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.sqlConfigParamsInput">sqlConfigParamsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.dataAccessConfig">dataAccessConfig</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.enableServerlessCompute">enableServerlessCompute</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.googleServiceAccount">googleServiceAccount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.instanceProfileArn">instanceProfileArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.securityPolicy">securityPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.sqlConfigParams">sqlConfigParams</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `providerConfig`<sup>Required</sup> <a name="providerConfig" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.providerConfig"></a>

```java
public SqlGlobalConfigProviderConfigOutputReference getProviderConfig();
```

- *Type:* <a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfigProviderConfigOutputReference">SqlGlobalConfigProviderConfigOutputReference</a>

---

##### `dataAccessConfigInput`<sup>Optional</sup> <a name="dataAccessConfigInput" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.dataAccessConfigInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDataAccessConfigInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `enableServerlessComputeInput`<sup>Optional</sup> <a name="enableServerlessComputeInput" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.enableServerlessComputeInput"></a>

```java
public java.lang.Boolean|IResolvable getEnableServerlessComputeInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `googleServiceAccountInput`<sup>Optional</sup> <a name="googleServiceAccountInput" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.googleServiceAccountInput"></a>

```java
public java.lang.String getGoogleServiceAccountInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `instanceProfileArnInput`<sup>Optional</sup> <a name="instanceProfileArnInput" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.instanceProfileArnInput"></a>

```java
public java.lang.String getInstanceProfileArnInput();
```

- *Type:* java.lang.String

---

##### `providerConfigInput`<sup>Optional</sup> <a name="providerConfigInput" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.providerConfigInput"></a>

```java
public SqlGlobalConfigProviderConfig getProviderConfigInput();
```

- *Type:* <a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfigProviderConfig">SqlGlobalConfigProviderConfig</a>

---

##### `securityPolicyInput`<sup>Optional</sup> <a name="securityPolicyInput" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.securityPolicyInput"></a>

```java
public java.lang.String getSecurityPolicyInput();
```

- *Type:* java.lang.String

---

##### `sqlConfigParamsInput`<sup>Optional</sup> <a name="sqlConfigParamsInput" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.sqlConfigParamsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getSqlConfigParamsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `dataAccessConfig`<sup>Required</sup> <a name="dataAccessConfig" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.dataAccessConfig"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDataAccessConfig();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `enableServerlessCompute`<sup>Required</sup> <a name="enableServerlessCompute" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.enableServerlessCompute"></a>

```java
public java.lang.Boolean|IResolvable getEnableServerlessCompute();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `googleServiceAccount`<sup>Required</sup> <a name="googleServiceAccount" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.googleServiceAccount"></a>

```java
public java.lang.String getGoogleServiceAccount();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `instanceProfileArn`<sup>Required</sup> <a name="instanceProfileArn" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.instanceProfileArn"></a>

```java
public java.lang.String getInstanceProfileArn();
```

- *Type:* java.lang.String

---

##### `securityPolicy`<sup>Required</sup> <a name="securityPolicy" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.securityPolicy"></a>

```java
public java.lang.String getSecurityPolicy();
```

- *Type:* java.lang.String

---

##### `sqlConfigParams`<sup>Required</sup> <a name="sqlConfigParams" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.sqlConfigParams"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getSqlConfigParams();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SqlGlobalConfigConfig <a name="SqlGlobalConfigConfig" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfigConfig.Initializer"></a>

```java
import io.cdktn.providers.databricks.sql_global_config.SqlGlobalConfigConfig;

SqlGlobalConfigConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .dataAccessConfig(java.util.Map<java.lang.String, java.lang.String>)
//  .enableServerlessCompute(java.lang.Boolean|IResolvable)
//  .googleServiceAccount(java.lang.String)
//  .id(java.lang.String)
//  .instanceProfileArn(java.lang.String)
//  .providerConfig(SqlGlobalConfigProviderConfig)
//  .securityPolicy(java.lang.String)
//  .sqlConfigParams(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfigConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfigConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfigConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfigConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfigConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfigConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfigConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfigConfig.property.dataAccessConfig">dataAccessConfig</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/sql_global_config#data_access_config SqlGlobalConfig#data_access_config}. |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfigConfig.property.enableServerlessCompute">enableServerlessCompute</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/sql_global_config#enable_serverless_compute SqlGlobalConfig#enable_serverless_compute}. |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfigConfig.property.googleServiceAccount">googleServiceAccount</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/sql_global_config#google_service_account SqlGlobalConfig#google_service_account}. |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfigConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/sql_global_config#id SqlGlobalConfig#id}. |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfigConfig.property.instanceProfileArn">instanceProfileArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/sql_global_config#instance_profile_arn SqlGlobalConfig#instance_profile_arn}. |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfigConfig.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfigProviderConfig">SqlGlobalConfigProviderConfig</a></code> | provider_config block. |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfigConfig.property.securityPolicy">securityPolicy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/sql_global_config#security_policy SqlGlobalConfig#security_policy}. |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfigConfig.property.sqlConfigParams">sqlConfigParams</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/sql_global_config#sql_config_params SqlGlobalConfig#sql_config_params}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfigConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfigConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfigConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfigConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfigConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfigConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfigConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `dataAccessConfig`<sup>Optional</sup> <a name="dataAccessConfig" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfigConfig.property.dataAccessConfig"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDataAccessConfig();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/sql_global_config#data_access_config SqlGlobalConfig#data_access_config}.

---

##### `enableServerlessCompute`<sup>Optional</sup> <a name="enableServerlessCompute" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfigConfig.property.enableServerlessCompute"></a>

```java
public java.lang.Boolean|IResolvable getEnableServerlessCompute();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/sql_global_config#enable_serverless_compute SqlGlobalConfig#enable_serverless_compute}.

---

##### `googleServiceAccount`<sup>Optional</sup> <a name="googleServiceAccount" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfigConfig.property.googleServiceAccount"></a>

```java
public java.lang.String getGoogleServiceAccount();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/sql_global_config#google_service_account SqlGlobalConfig#google_service_account}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfigConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/sql_global_config#id SqlGlobalConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instanceProfileArn`<sup>Optional</sup> <a name="instanceProfileArn" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfigConfig.property.instanceProfileArn"></a>

```java
public java.lang.String getInstanceProfileArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/sql_global_config#instance_profile_arn SqlGlobalConfig#instance_profile_arn}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfigConfig.property.providerConfig"></a>

```java
public SqlGlobalConfigProviderConfig getProviderConfig();
```

- *Type:* <a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfigProviderConfig">SqlGlobalConfigProviderConfig</a>

provider_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/sql_global_config#provider_config SqlGlobalConfig#provider_config}

---

##### `securityPolicy`<sup>Optional</sup> <a name="securityPolicy" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfigConfig.property.securityPolicy"></a>

```java
public java.lang.String getSecurityPolicy();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/sql_global_config#security_policy SqlGlobalConfig#security_policy}.

---

##### `sqlConfigParams`<sup>Optional</sup> <a name="sqlConfigParams" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfigConfig.property.sqlConfigParams"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getSqlConfigParams();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/sql_global_config#sql_config_params SqlGlobalConfig#sql_config_params}.

---

### SqlGlobalConfigProviderConfig <a name="SqlGlobalConfigProviderConfig" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfigProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfigProviderConfig.Initializer"></a>

```java
import io.cdktn.providers.databricks.sql_global_config.SqlGlobalConfigProviderConfig;

SqlGlobalConfigProviderConfig.builder()
//  .workspaceId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfigProviderConfig.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/sql_global_config#workspace_id SqlGlobalConfig#workspace_id}. |

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfigProviderConfig.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/sql_global_config#workspace_id SqlGlobalConfig#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### SqlGlobalConfigProviderConfigOutputReference <a name="SqlGlobalConfigProviderConfigOutputReference" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfigProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfigProviderConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.sql_global_config.SqlGlobalConfigProviderConfigOutputReference;

new SqlGlobalConfigProviderConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfigProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfigProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfigProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfigProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfigProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfigProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfigProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfigProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfigProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfigProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfigProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfigProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfigProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfigProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfigProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfigProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfigProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfigProviderConfigOutputReference.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfigProviderConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfigProviderConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfigProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfigProviderConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfigProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfigProviderConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfigProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfigProviderConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfigProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfigProviderConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfigProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfigProviderConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfigProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfigProviderConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfigProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfigProviderConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfigProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfigProviderConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfigProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfigProviderConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfigProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfigProviderConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfigProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfigProviderConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfigProviderConfigOutputReference.resetWorkspaceId"></a>

```java
public void resetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfigProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfigProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfigProviderConfigOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfigProviderConfigOutputReference.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfigProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfigProviderConfig">SqlGlobalConfigProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfigProviderConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfigProviderConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfigProviderConfigOutputReference.property.workspaceIdInput"></a>

```java
public java.lang.String getWorkspaceIdInput();
```

- *Type:* java.lang.String

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfigProviderConfigOutputReference.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfigProviderConfigOutputReference.property.internalValue"></a>

```java
public SqlGlobalConfigProviderConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfigProviderConfig">SqlGlobalConfigProviderConfig</a>

---



