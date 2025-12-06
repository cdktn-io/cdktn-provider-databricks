# `dataDatabricksWorkspaceEntityTagAssignments` Submodule <a name="`dataDatabricksWorkspaceEntityTagAssignments` Submodule" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksWorkspaceEntityTagAssignments <a name="DataDatabricksWorkspaceEntityTagAssignments" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.99.0/docs/data-sources/workspace_entity_tag_assignments databricks_workspace_entity_tag_assignments}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_workspace_entity_tag_assignments.DataDatabricksWorkspaceEntityTagAssignments;

DataDatabricksWorkspaceEntityTagAssignments.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .entityId(java.lang.String)
    .entityType(java.lang.String)
//  .pageSize(java.lang.Number)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.Initializer.parameter.entityId">entityId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.99.0/docs/data-sources/workspace_entity_tag_assignments#entity_id DataDatabricksWorkspaceEntityTagAssignments#entity_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.Initializer.parameter.entityType">entityType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.99.0/docs/data-sources/workspace_entity_tag_assignments#entity_type DataDatabricksWorkspaceEntityTagAssignments#entity_type}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.Initializer.parameter.pageSize">pageSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.99.0/docs/data-sources/workspace_entity_tag_assignments#page_size DataDatabricksWorkspaceEntityTagAssignments#page_size}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `entityId`<sup>Required</sup> <a name="entityId" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.Initializer.parameter.entityId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.99.0/docs/data-sources/workspace_entity_tag_assignments#entity_id DataDatabricksWorkspaceEntityTagAssignments#entity_id}.

---

##### `entityType`<sup>Required</sup> <a name="entityType" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.Initializer.parameter.entityType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.99.0/docs/data-sources/workspace_entity_tag_assignments#entity_type DataDatabricksWorkspaceEntityTagAssignments#entity_type}.

---

##### `pageSize`<sup>Optional</sup> <a name="pageSize" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.Initializer.parameter.pageSize"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.99.0/docs/data-sources/workspace_entity_tag_assignments#page_size DataDatabricksWorkspaceEntityTagAssignments#page_size}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.resetPageSize">resetPageSize</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetPageSize` <a name="resetPageSize" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.resetPageSize"></a>

```java
public void resetPageSize()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatabricksWorkspaceEntityTagAssignments resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_workspace_entity_tag_assignments.DataDatabricksWorkspaceEntityTagAssignments;

DataDatabricksWorkspaceEntityTagAssignments.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_workspace_entity_tag_assignments.DataDatabricksWorkspaceEntityTagAssignments;

DataDatabricksWorkspaceEntityTagAssignments.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_workspace_entity_tag_assignments.DataDatabricksWorkspaceEntityTagAssignments;

DataDatabricksWorkspaceEntityTagAssignments.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_workspace_entity_tag_assignments.DataDatabricksWorkspaceEntityTagAssignments;

DataDatabricksWorkspaceEntityTagAssignments.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataDatabricksWorkspaceEntityTagAssignments.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataDatabricksWorkspaceEntityTagAssignments resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataDatabricksWorkspaceEntityTagAssignments to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataDatabricksWorkspaceEntityTagAssignments that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.99.0/docs/data-sources/workspace_entity_tag_assignments#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataDatabricksWorkspaceEntityTagAssignments to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.property.tagAssignments">tagAssignments</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsList">DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.property.entityIdInput">entityIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.property.entityTypeInput">entityTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.property.pageSizeInput">pageSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.property.entityId">entityId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.property.entityType">entityType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.property.pageSize">pageSize</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `tagAssignments`<sup>Required</sup> <a name="tagAssignments" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.property.tagAssignments"></a>

```java
public DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsList getTagAssignments();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsList">DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsList</a>

---

##### `entityIdInput`<sup>Optional</sup> <a name="entityIdInput" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.property.entityIdInput"></a>

```java
public java.lang.String getEntityIdInput();
```

- *Type:* java.lang.String

---

##### `entityTypeInput`<sup>Optional</sup> <a name="entityTypeInput" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.property.entityTypeInput"></a>

```java
public java.lang.String getEntityTypeInput();
```

- *Type:* java.lang.String

---

##### `pageSizeInput`<sup>Optional</sup> <a name="pageSizeInput" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.property.pageSizeInput"></a>

```java
public java.lang.Number getPageSizeInput();
```

- *Type:* java.lang.Number

---

##### `entityId`<sup>Required</sup> <a name="entityId" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.property.entityId"></a>

```java
public java.lang.String getEntityId();
```

- *Type:* java.lang.String

---

##### `entityType`<sup>Required</sup> <a name="entityType" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.property.entityType"></a>

```java
public java.lang.String getEntityType();
```

- *Type:* java.lang.String

---

##### `pageSize`<sup>Required</sup> <a name="pageSize" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.property.pageSize"></a>

```java
public java.lang.Number getPageSize();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksWorkspaceEntityTagAssignmentsConfig <a name="DataDatabricksWorkspaceEntityTagAssignmentsConfig" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_workspace_entity_tag_assignments.DataDatabricksWorkspaceEntityTagAssignmentsConfig;

DataDatabricksWorkspaceEntityTagAssignmentsConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .entityId(java.lang.String)
    .entityType(java.lang.String)
//  .pageSize(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsConfig.property.entityId">entityId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.99.0/docs/data-sources/workspace_entity_tag_assignments#entity_id DataDatabricksWorkspaceEntityTagAssignments#entity_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsConfig.property.entityType">entityType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.99.0/docs/data-sources/workspace_entity_tag_assignments#entity_type DataDatabricksWorkspaceEntityTagAssignments#entity_type}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsConfig.property.pageSize">pageSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.99.0/docs/data-sources/workspace_entity_tag_assignments#page_size DataDatabricksWorkspaceEntityTagAssignments#page_size}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `entityId`<sup>Required</sup> <a name="entityId" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsConfig.property.entityId"></a>

```java
public java.lang.String getEntityId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.99.0/docs/data-sources/workspace_entity_tag_assignments#entity_id DataDatabricksWorkspaceEntityTagAssignments#entity_id}.

---

##### `entityType`<sup>Required</sup> <a name="entityType" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsConfig.property.entityType"></a>

```java
public java.lang.String getEntityType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.99.0/docs/data-sources/workspace_entity_tag_assignments#entity_type DataDatabricksWorkspaceEntityTagAssignments#entity_type}.

---

##### `pageSize`<sup>Optional</sup> <a name="pageSize" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsConfig.property.pageSize"></a>

```java
public java.lang.Number getPageSize();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.99.0/docs/data-sources/workspace_entity_tag_assignments#page_size DataDatabricksWorkspaceEntityTagAssignments#page_size}.

---

### DataDatabricksWorkspaceEntityTagAssignmentsTagAssignments <a name="DataDatabricksWorkspaceEntityTagAssignmentsTagAssignments" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignments"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignments.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_workspace_entity_tag_assignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignments;

DataDatabricksWorkspaceEntityTagAssignmentsTagAssignments.builder()
    .entityId(java.lang.String)
    .entityType(java.lang.String)
    .tagKey(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignments.property.entityId">entityId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.99.0/docs/data-sources/workspace_entity_tag_assignments#entity_id DataDatabricksWorkspaceEntityTagAssignments#entity_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignments.property.entityType">entityType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.99.0/docs/data-sources/workspace_entity_tag_assignments#entity_type DataDatabricksWorkspaceEntityTagAssignments#entity_type}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignments.property.tagKey">tagKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.99.0/docs/data-sources/workspace_entity_tag_assignments#tag_key DataDatabricksWorkspaceEntityTagAssignments#tag_key}. |

---

##### `entityId`<sup>Required</sup> <a name="entityId" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignments.property.entityId"></a>

```java
public java.lang.String getEntityId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.99.0/docs/data-sources/workspace_entity_tag_assignments#entity_id DataDatabricksWorkspaceEntityTagAssignments#entity_id}.

---

##### `entityType`<sup>Required</sup> <a name="entityType" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignments.property.entityType"></a>

```java
public java.lang.String getEntityType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.99.0/docs/data-sources/workspace_entity_tag_assignments#entity_type DataDatabricksWorkspaceEntityTagAssignments#entity_type}.

---

##### `tagKey`<sup>Required</sup> <a name="tagKey" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignments.property.tagKey"></a>

```java
public java.lang.String getTagKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.99.0/docs/data-sources/workspace_entity_tag_assignments#tag_key DataDatabricksWorkspaceEntityTagAssignments#tag_key}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsList <a name="DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsList" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_workspace_entity_tag_assignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsList;

new DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsList.get"></a>

```java
public DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignments">DataDatabricksWorkspaceEntityTagAssignmentsTagAssignments</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DataDatabricksWorkspaceEntityTagAssignmentsTagAssignments> getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignments">DataDatabricksWorkspaceEntityTagAssignmentsTagAssignments</a>>

---


### DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference <a name="DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_workspace_entity_tag_assignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference;

new DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.property.tagValue">tagValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.property.entityIdInput">entityIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.property.entityTypeInput">entityTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.property.tagKeyInput">tagKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.property.entityId">entityId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.property.entityType">entityType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.property.tagKey">tagKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignments">DataDatabricksWorkspaceEntityTagAssignmentsTagAssignments</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `tagValue`<sup>Required</sup> <a name="tagValue" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.property.tagValue"></a>

```java
public java.lang.String getTagValue();
```

- *Type:* java.lang.String

---

##### `entityIdInput`<sup>Optional</sup> <a name="entityIdInput" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.property.entityIdInput"></a>

```java
public java.lang.String getEntityIdInput();
```

- *Type:* java.lang.String

---

##### `entityTypeInput`<sup>Optional</sup> <a name="entityTypeInput" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.property.entityTypeInput"></a>

```java
public java.lang.String getEntityTypeInput();
```

- *Type:* java.lang.String

---

##### `tagKeyInput`<sup>Optional</sup> <a name="tagKeyInput" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.property.tagKeyInput"></a>

```java
public java.lang.String getTagKeyInput();
```

- *Type:* java.lang.String

---

##### `entityId`<sup>Required</sup> <a name="entityId" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.property.entityId"></a>

```java
public java.lang.String getEntityId();
```

- *Type:* java.lang.String

---

##### `entityType`<sup>Required</sup> <a name="entityType" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.property.entityType"></a>

```java
public java.lang.String getEntityType();
```

- *Type:* java.lang.String

---

##### `tagKey`<sup>Required</sup> <a name="tagKey" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.property.tagKey"></a>

```java
public java.lang.String getTagKey();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.property.internalValue"></a>

```java
public DataDatabricksWorkspaceEntityTagAssignmentsTagAssignments getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignments">DataDatabricksWorkspaceEntityTagAssignmentsTagAssignments</a>

---



