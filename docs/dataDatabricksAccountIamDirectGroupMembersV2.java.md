# `dataDatabricksAccountIamDirectGroupMembersV2` Submodule <a name="`dataDatabricksAccountIamDirectGroupMembersV2` Submodule" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksAccountIamDirectGroupMembersV2 <a name="DataDatabricksAccountIamDirectGroupMembersV2" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/account_iam_direct_group_members_v2 databricks_account_iam_direct_group_members_v2}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_account_iam_direct_group_members_v2.DataDatabricksAccountIamDirectGroupMembersV2;

DataDatabricksAccountIamDirectGroupMembersV2.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .groupId(java.lang.Number)
//  .pageSize(java.lang.Number)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.Initializer.parameter.groupId">groupId</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/account_iam_direct_group_members_v2#group_id DataDatabricksAccountIamDirectGroupMembersV2#group_id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.Initializer.parameter.pageSize">pageSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/account_iam_direct_group_members_v2#page_size DataDatabricksAccountIamDirectGroupMembersV2#page_size}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.Initializer.parameter.groupId"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/account_iam_direct_group_members_v2#group_id DataDatabricksAccountIamDirectGroupMembersV2#group_id}.

---

##### `pageSize`<sup>Optional</sup> <a name="pageSize" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.Initializer.parameter.pageSize"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/account_iam_direct_group_members_v2#page_size DataDatabricksAccountIamDirectGroupMembersV2#page_size}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.resetPageSize">resetPageSize</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetPageSize` <a name="resetPageSize" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.resetPageSize"></a>

```java
public void resetPageSize()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatabricksAccountIamDirectGroupMembersV2 resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.isConstruct"></a>

```java
import io.cdktn.providers.databricks.data_databricks_account_iam_direct_group_members_v2.DataDatabricksAccountIamDirectGroupMembersV2;

DataDatabricksAccountIamDirectGroupMembersV2.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.isTerraformElement"></a>

```java
import io.cdktn.providers.databricks.data_databricks_account_iam_direct_group_members_v2.DataDatabricksAccountIamDirectGroupMembersV2;

DataDatabricksAccountIamDirectGroupMembersV2.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.isTerraformDataSource"></a>

```java
import io.cdktn.providers.databricks.data_databricks_account_iam_direct_group_members_v2.DataDatabricksAccountIamDirectGroupMembersV2;

DataDatabricksAccountIamDirectGroupMembersV2.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.generateConfigForImport"></a>

```java
import io.cdktn.providers.databricks.data_databricks_account_iam_direct_group_members_v2.DataDatabricksAccountIamDirectGroupMembersV2;

DataDatabricksAccountIamDirectGroupMembersV2.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataDatabricksAccountIamDirectGroupMembersV2.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataDatabricksAccountIamDirectGroupMembersV2 resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataDatabricksAccountIamDirectGroupMembersV2 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataDatabricksAccountIamDirectGroupMembersV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/account_iam_direct_group_members_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksAccountIamDirectGroupMembersV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.property.directGroupMembers">directGroupMembers</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersList">DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.property.groupIdInput">groupIdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.property.pageSizeInput">pageSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.property.groupId">groupId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.property.pageSize">pageSize</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `directGroupMembers`<sup>Required</sup> <a name="directGroupMembers" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.property.directGroupMembers"></a>

```java
public DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersList getDirectGroupMembers();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersList">DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersList</a>

---

##### `groupIdInput`<sup>Optional</sup> <a name="groupIdInput" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.property.groupIdInput"></a>

```java
public java.lang.Number getGroupIdInput();
```

- *Type:* java.lang.Number

---

##### `pageSizeInput`<sup>Optional</sup> <a name="pageSizeInput" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.property.pageSizeInput"></a>

```java
public java.lang.Number getPageSizeInput();
```

- *Type:* java.lang.Number

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.property.groupId"></a>

```java
public java.lang.Number getGroupId();
```

- *Type:* java.lang.Number

---

##### `pageSize`<sup>Required</sup> <a name="pageSize" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.property.pageSize"></a>

```java
public java.lang.Number getPageSize();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksAccountIamDirectGroupMembersV2Config <a name="DataDatabricksAccountIamDirectGroupMembersV2Config" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2Config.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_account_iam_direct_group_members_v2.DataDatabricksAccountIamDirectGroupMembersV2Config;

DataDatabricksAccountIamDirectGroupMembersV2Config.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .groupId(java.lang.Number)
//  .pageSize(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2Config.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2Config.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2Config.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2Config.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2Config.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2Config.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2Config.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2Config.property.groupId">groupId</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/account_iam_direct_group_members_v2#group_id DataDatabricksAccountIamDirectGroupMembersV2#group_id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2Config.property.pageSize">pageSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/account_iam_direct_group_members_v2#page_size DataDatabricksAccountIamDirectGroupMembersV2#page_size}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2Config.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2Config.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2Config.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2Config.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2Config.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2Config.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2Config.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2Config.property.groupId"></a>

```java
public java.lang.Number getGroupId();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/account_iam_direct_group_members_v2#group_id DataDatabricksAccountIamDirectGroupMembersV2#group_id}.

---

##### `pageSize`<sup>Optional</sup> <a name="pageSize" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2Config.property.pageSize"></a>

```java
public java.lang.Number getPageSize();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/account_iam_direct_group_members_v2#page_size DataDatabricksAccountIamDirectGroupMembersV2#page_size}.

---

### DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembers <a name="DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembers" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembers"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembers.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_account_iam_direct_group_members_v2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembers;

DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembers.builder()
    .groupId(java.lang.Number)
    .principalId(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembers.property.groupId">groupId</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/account_iam_direct_group_members_v2#group_id DataDatabricksAccountIamDirectGroupMembersV2#group_id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembers.property.principalId">principalId</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/account_iam_direct_group_members_v2#principal_id DataDatabricksAccountIamDirectGroupMembersV2#principal_id}. |

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembers.property.groupId"></a>

```java
public java.lang.Number getGroupId();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/account_iam_direct_group_members_v2#group_id DataDatabricksAccountIamDirectGroupMembersV2#group_id}.

---

##### `principalId`<sup>Required</sup> <a name="principalId" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembers.property.principalId"></a>

```java
public java.lang.Number getPrincipalId();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/account_iam_direct_group_members_v2#principal_id DataDatabricksAccountIamDirectGroupMembersV2#principal_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersList <a name="DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersList" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersList.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_account_iam_direct_group_members_v2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersList;

new DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersList.get"></a>

```java
public DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembers">DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembers</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembers> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembers">DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembers</a>>

---


### DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference <a name="DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_account_iam_direct_group_members_v2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference;

new DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference.property.externalId">externalId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference.property.membershipSource">membershipSource</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference.property.principalType">principalType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference.property.groupIdInput">groupIdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference.property.principalIdInput">principalIdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference.property.groupId">groupId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference.property.principalId">principalId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembers">DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `externalId`<sup>Required</sup> <a name="externalId" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference.property.externalId"></a>

```java
public java.lang.String getExternalId();
```

- *Type:* java.lang.String

---

##### `membershipSource`<sup>Required</sup> <a name="membershipSource" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference.property.membershipSource"></a>

```java
public java.lang.String getMembershipSource();
```

- *Type:* java.lang.String

---

##### `principalType`<sup>Required</sup> <a name="principalType" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference.property.principalType"></a>

```java
public java.lang.String getPrincipalType();
```

- *Type:* java.lang.String

---

##### `groupIdInput`<sup>Optional</sup> <a name="groupIdInput" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference.property.groupIdInput"></a>

```java
public java.lang.Number getGroupIdInput();
```

- *Type:* java.lang.Number

---

##### `principalIdInput`<sup>Optional</sup> <a name="principalIdInput" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference.property.principalIdInput"></a>

```java
public java.lang.Number getPrincipalIdInput();
```

- *Type:* java.lang.Number

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference.property.groupId"></a>

```java
public java.lang.Number getGroupId();
```

- *Type:* java.lang.Number

---

##### `principalId`<sup>Required</sup> <a name="principalId" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference.property.principalId"></a>

```java
public java.lang.Number getPrincipalId();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference.property.internalValue"></a>

```java
public DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembers getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembers">DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembers</a>

---



