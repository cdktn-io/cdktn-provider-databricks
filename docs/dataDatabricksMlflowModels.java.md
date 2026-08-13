# `dataDatabricksMlflowModels` Submodule <a name="`dataDatabricksMlflowModels` Submodule" id="@cdktn/provider-databricks.dataDatabricksMlflowModels"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksMlflowModels <a name="DataDatabricksMlflowModels" id="@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/mlflow_models databricks_mlflow_models}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_mlflow_models.DataDatabricksMlflowModels;

DataDatabricksMlflowModels.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .id(java.lang.String)
//  .names(java.util.List<java.lang.String>)
//  .providerConfig(DataDatabricksMlflowModelsProviderConfig)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/mlflow_models#id DataDatabricksMlflowModels#id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.Initializer.parameter.names">names</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/mlflow_models#names DataDatabricksMlflowModels#names}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.Initializer.parameter.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModelsProviderConfig">DataDatabricksMlflowModelsProviderConfig</a></code> | provider_config block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/mlflow_models#id DataDatabricksMlflowModels#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `names`<sup>Optional</sup> <a name="names" id="@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.Initializer.parameter.names"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/mlflow_models#names DataDatabricksMlflowModels#names}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.Initializer.parameter.providerConfig"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModelsProviderConfig">DataDatabricksMlflowModelsProviderConfig</a>

provider_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/mlflow_models#provider_config DataDatabricksMlflowModels#provider_config}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.putProviderConfig">putProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.resetNames">resetNames</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.resetProviderConfig">resetProviderConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putProviderConfig` <a name="putProviderConfig" id="@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.putProviderConfig"></a>

```java
public void putProviderConfig(DataDatabricksMlflowModelsProviderConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModelsProviderConfig">DataDatabricksMlflowModelsProviderConfig</a>

---

##### `resetId` <a name="resetId" id="@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.resetId"></a>

```java
public void resetId()
```

##### `resetNames` <a name="resetNames" id="@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.resetNames"></a>

```java
public void resetNames()
```

##### `resetProviderConfig` <a name="resetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.resetProviderConfig"></a>

```java
public void resetProviderConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatabricksMlflowModels resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.isConstruct"></a>

```java
import io.cdktn.providers.databricks.data_databricks_mlflow_models.DataDatabricksMlflowModels;

DataDatabricksMlflowModels.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.isTerraformElement"></a>

```java
import io.cdktn.providers.databricks.data_databricks_mlflow_models.DataDatabricksMlflowModels;

DataDatabricksMlflowModels.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.isTerraformDataSource"></a>

```java
import io.cdktn.providers.databricks.data_databricks_mlflow_models.DataDatabricksMlflowModels;

DataDatabricksMlflowModels.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.generateConfigForImport"></a>

```java
import io.cdktn.providers.databricks.data_databricks_mlflow_models.DataDatabricksMlflowModels;

DataDatabricksMlflowModels.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataDatabricksMlflowModels.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataDatabricksMlflowModels resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataDatabricksMlflowModels to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataDatabricksMlflowModels that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/mlflow_models#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksMlflowModels to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModelsProviderConfigOutputReference">DataDatabricksMlflowModelsProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.property.namesInput">namesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.property.providerConfigInput">providerConfigInput</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModelsProviderConfig">DataDatabricksMlflowModelsProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.property.names">names</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `providerConfig`<sup>Required</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.property.providerConfig"></a>

```java
public DataDatabricksMlflowModelsProviderConfigOutputReference getProviderConfig();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModelsProviderConfigOutputReference">DataDatabricksMlflowModelsProviderConfigOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `namesInput`<sup>Optional</sup> <a name="namesInput" id="@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.property.namesInput"></a>

```java
public java.util.List<java.lang.String> getNamesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `providerConfigInput`<sup>Optional</sup> <a name="providerConfigInput" id="@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.property.providerConfigInput"></a>

```java
public DataDatabricksMlflowModelsProviderConfig getProviderConfigInput();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModelsProviderConfig">DataDatabricksMlflowModelsProviderConfig</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `names`<sup>Required</sup> <a name="names" id="@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.property.names"></a>

```java
public java.util.List<java.lang.String> getNames();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksMlflowModelsConfig <a name="DataDatabricksMlflowModelsConfig" id="@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModelsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModelsConfig.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_mlflow_models.DataDatabricksMlflowModelsConfig;

DataDatabricksMlflowModelsConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .id(java.lang.String)
//  .names(java.util.List<java.lang.String>)
//  .providerConfig(DataDatabricksMlflowModelsProviderConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModelsConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModelsConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModelsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModelsConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModelsConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModelsConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModelsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModelsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/mlflow_models#id DataDatabricksMlflowModels#id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModelsConfig.property.names">names</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/mlflow_models#names DataDatabricksMlflowModels#names}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModelsConfig.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModelsProviderConfig">DataDatabricksMlflowModelsProviderConfig</a></code> | provider_config block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModelsConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModelsConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModelsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModelsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModelsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModelsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModelsConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModelsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/mlflow_models#id DataDatabricksMlflowModels#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `names`<sup>Optional</sup> <a name="names" id="@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModelsConfig.property.names"></a>

```java
public java.util.List<java.lang.String> getNames();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/mlflow_models#names DataDatabricksMlflowModels#names}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModelsConfig.property.providerConfig"></a>

```java
public DataDatabricksMlflowModelsProviderConfig getProviderConfig();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModelsProviderConfig">DataDatabricksMlflowModelsProviderConfig</a>

provider_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/mlflow_models#provider_config DataDatabricksMlflowModels#provider_config}

---

### DataDatabricksMlflowModelsProviderConfig <a name="DataDatabricksMlflowModelsProviderConfig" id="@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModelsProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModelsProviderConfig.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_mlflow_models.DataDatabricksMlflowModelsProviderConfig;

DataDatabricksMlflowModelsProviderConfig.builder()
//  .workspaceId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModelsProviderConfig.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/mlflow_models#workspace_id DataDatabricksMlflowModels#workspace_id}. |

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModelsProviderConfig.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/mlflow_models#workspace_id DataDatabricksMlflowModels#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksMlflowModelsProviderConfigOutputReference <a name="DataDatabricksMlflowModelsProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModelsProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModelsProviderConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_mlflow_models.DataDatabricksMlflowModelsProviderConfigOutputReference;

new DataDatabricksMlflowModelsProviderConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModelsProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModelsProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModelsProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModelsProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModelsProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModelsProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModelsProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModelsProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModelsProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModelsProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModelsProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModelsProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModelsProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModelsProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModelsProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModelsProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModelsProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModelsProviderConfigOutputReference.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModelsProviderConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModelsProviderConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModelsProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModelsProviderConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModelsProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModelsProviderConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModelsProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModelsProviderConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModelsProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModelsProviderConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModelsProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModelsProviderConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModelsProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModelsProviderConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModelsProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModelsProviderConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModelsProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModelsProviderConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModelsProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModelsProviderConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModelsProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModelsProviderConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModelsProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModelsProviderConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModelsProviderConfigOutputReference.resetWorkspaceId"></a>

```java
public void resetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModelsProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModelsProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModelsProviderConfigOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModelsProviderConfigOutputReference.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModelsProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModelsProviderConfig">DataDatabricksMlflowModelsProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModelsProviderConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModelsProviderConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModelsProviderConfigOutputReference.property.workspaceIdInput"></a>

```java
public java.lang.String getWorkspaceIdInput();
```

- *Type:* java.lang.String

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModelsProviderConfigOutputReference.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModelsProviderConfigOutputReference.property.internalValue"></a>

```java
public DataDatabricksMlflowModelsProviderConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModelsProviderConfig">DataDatabricksMlflowModelsProviderConfig</a>

---



