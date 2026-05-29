# `dataDatabricksAccountSettingUserPreferenceV2` Submodule <a name="`dataDatabricksAccountSettingUserPreferenceV2` Submodule" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksAccountSettingUserPreferenceV2 <a name="DataDatabricksAccountSettingUserPreferenceV2" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/account_setting_user_preference_v2 databricks_account_setting_user_preference_v2}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_account_setting_user_preference_v2.DataDatabricksAccountSettingUserPreferenceV2;

DataDatabricksAccountSettingUserPreferenceV2.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .userId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/account_setting_user_preference_v2#name DataDatabricksAccountSettingUserPreferenceV2#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.Initializer.parameter.userId">userId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/account_setting_user_preference_v2#user_id DataDatabricksAccountSettingUserPreferenceV2#user_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/account_setting_user_preference_v2#name DataDatabricksAccountSettingUserPreferenceV2#name}.

---

##### `userId`<sup>Required</sup> <a name="userId" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.Initializer.parameter.userId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/account_setting_user_preference_v2#user_id DataDatabricksAccountSettingUserPreferenceV2#user_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatabricksAccountSettingUserPreferenceV2 resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.isConstruct"></a>

```java
import io.cdktn.providers.databricks.data_databricks_account_setting_user_preference_v2.DataDatabricksAccountSettingUserPreferenceV2;

DataDatabricksAccountSettingUserPreferenceV2.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.isTerraformElement"></a>

```java
import io.cdktn.providers.databricks.data_databricks_account_setting_user_preference_v2.DataDatabricksAccountSettingUserPreferenceV2;

DataDatabricksAccountSettingUserPreferenceV2.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.isTerraformDataSource"></a>

```java
import io.cdktn.providers.databricks.data_databricks_account_setting_user_preference_v2.DataDatabricksAccountSettingUserPreferenceV2;

DataDatabricksAccountSettingUserPreferenceV2.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.generateConfigForImport"></a>

```java
import io.cdktn.providers.databricks.data_databricks_account_setting_user_preference_v2.DataDatabricksAccountSettingUserPreferenceV2;

DataDatabricksAccountSettingUserPreferenceV2.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataDatabricksAccountSettingUserPreferenceV2.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataDatabricksAccountSettingUserPreferenceV2 resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataDatabricksAccountSettingUserPreferenceV2 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataDatabricksAccountSettingUserPreferenceV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/account_setting_user_preference_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksAccountSettingUserPreferenceV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.property.booleanVal">booleanVal</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference">DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.property.effectiveBooleanVal">effectiveBooleanVal</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference">DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.property.effectiveStringVal">effectiveStringVal</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference">DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.property.stringVal">stringVal</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference">DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.property.userIdInput">userIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.property.userId">userId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `booleanVal`<sup>Required</sup> <a name="booleanVal" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.property.booleanVal"></a>

```java
public DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference getBooleanVal();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference">DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference</a>

---

##### `effectiveBooleanVal`<sup>Required</sup> <a name="effectiveBooleanVal" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.property.effectiveBooleanVal"></a>

```java
public DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference getEffectiveBooleanVal();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference">DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference</a>

---

##### `effectiveStringVal`<sup>Required</sup> <a name="effectiveStringVal" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.property.effectiveStringVal"></a>

```java
public DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference getEffectiveStringVal();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference">DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference</a>

---

##### `stringVal`<sup>Required</sup> <a name="stringVal" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.property.stringVal"></a>

```java
public DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference getStringVal();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference">DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `userIdInput`<sup>Optional</sup> <a name="userIdInput" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.property.userIdInput"></a>

```java
public java.lang.String getUserIdInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `userId`<sup>Required</sup> <a name="userId" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.property.userId"></a>

```java
public java.lang.String getUserId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksAccountSettingUserPreferenceV2BooleanVal <a name="DataDatabricksAccountSettingUserPreferenceV2BooleanVal" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanVal"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanVal.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_account_setting_user_preference_v2.DataDatabricksAccountSettingUserPreferenceV2BooleanVal;

DataDatabricksAccountSettingUserPreferenceV2BooleanVal.builder()
//  .value(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanVal.property.value">value</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/account_setting_user_preference_v2#value DataDatabricksAccountSettingUserPreferenceV2#value}. |

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanVal.property.value"></a>

```java
public java.lang.Boolean|IResolvable getValue();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/account_setting_user_preference_v2#value DataDatabricksAccountSettingUserPreferenceV2#value}.

---

### DataDatabricksAccountSettingUserPreferenceV2Config <a name="DataDatabricksAccountSettingUserPreferenceV2Config" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2Config.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_account_setting_user_preference_v2.DataDatabricksAccountSettingUserPreferenceV2Config;

DataDatabricksAccountSettingUserPreferenceV2Config.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .userId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2Config.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2Config.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2Config.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2Config.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2Config.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2Config.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2Config.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2Config.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/account_setting_user_preference_v2#name DataDatabricksAccountSettingUserPreferenceV2#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2Config.property.userId">userId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/account_setting_user_preference_v2#user_id DataDatabricksAccountSettingUserPreferenceV2#user_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2Config.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2Config.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2Config.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2Config.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2Config.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2Config.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2Config.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2Config.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/account_setting_user_preference_v2#name DataDatabricksAccountSettingUserPreferenceV2#name}.

---

##### `userId`<sup>Required</sup> <a name="userId" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2Config.property.userId"></a>

```java
public java.lang.String getUserId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/account_setting_user_preference_v2#user_id DataDatabricksAccountSettingUserPreferenceV2#user_id}.

---

### DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanVal <a name="DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanVal" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanVal"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanVal.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_account_setting_user_preference_v2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanVal;

DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanVal.builder()
//  .value(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanVal.property.value">value</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/account_setting_user_preference_v2#value DataDatabricksAccountSettingUserPreferenceV2#value}. |

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanVal.property.value"></a>

```java
public java.lang.Boolean|IResolvable getValue();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/account_setting_user_preference_v2#value DataDatabricksAccountSettingUserPreferenceV2#value}.

---

### DataDatabricksAccountSettingUserPreferenceV2EffectiveStringVal <a name="DataDatabricksAccountSettingUserPreferenceV2EffectiveStringVal" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringVal"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringVal.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_account_setting_user_preference_v2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringVal;

DataDatabricksAccountSettingUserPreferenceV2EffectiveStringVal.builder()
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringVal.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/account_setting_user_preference_v2#value DataDatabricksAccountSettingUserPreferenceV2#value}. |

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringVal.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/account_setting_user_preference_v2#value DataDatabricksAccountSettingUserPreferenceV2#value}.

---

### DataDatabricksAccountSettingUserPreferenceV2StringVal <a name="DataDatabricksAccountSettingUserPreferenceV2StringVal" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringVal"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringVal.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_account_setting_user_preference_v2.DataDatabricksAccountSettingUserPreferenceV2StringVal;

DataDatabricksAccountSettingUserPreferenceV2StringVal.builder()
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringVal.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/account_setting_user_preference_v2#value DataDatabricksAccountSettingUserPreferenceV2#value}. |

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringVal.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/account_setting_user_preference_v2#value DataDatabricksAccountSettingUserPreferenceV2#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference <a name="DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_account_setting_user_preference_v2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference;

new DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetValue` <a name="resetValue" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.property.value">value</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanVal">DataDatabricksAccountSettingUserPreferenceV2BooleanVal</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.property.valueInput"></a>

```java
public java.lang.Boolean|IResolvable getValueInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.property.value"></a>

```java
public java.lang.Boolean|IResolvable getValue();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.property.internalValue"></a>

```java
public DataDatabricksAccountSettingUserPreferenceV2BooleanVal getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanVal">DataDatabricksAccountSettingUserPreferenceV2BooleanVal</a>

---


### DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference <a name="DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_account_setting_user_preference_v2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference;

new DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetValue` <a name="resetValue" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.property.value">value</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanVal">DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanVal</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.property.valueInput"></a>

```java
public java.lang.Boolean|IResolvable getValueInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.property.value"></a>

```java
public java.lang.Boolean|IResolvable getValue();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.property.internalValue"></a>

```java
public DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanVal getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanVal">DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanVal</a>

---


### DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference <a name="DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_account_setting_user_preference_v2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference;

new DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetValue` <a name="resetValue" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringVal">DataDatabricksAccountSettingUserPreferenceV2EffectiveStringVal</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.property.internalValue"></a>

```java
public DataDatabricksAccountSettingUserPreferenceV2EffectiveStringVal getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringVal">DataDatabricksAccountSettingUserPreferenceV2EffectiveStringVal</a>

---


### DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference <a name="DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_account_setting_user_preference_v2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference;

new DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetValue` <a name="resetValue" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringVal">DataDatabricksAccountSettingUserPreferenceV2StringVal</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.property.internalValue"></a>

```java
public DataDatabricksAccountSettingUserPreferenceV2StringVal getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringVal">DataDatabricksAccountSettingUserPreferenceV2StringVal</a>

---



