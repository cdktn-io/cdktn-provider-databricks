# `dataDatabricksAccountIamDirectGroupMembersV2` Submodule <a name="`dataDatabricksAccountIamDirectGroupMembersV2` Submodule" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksAccountIamDirectGroupMembersV2 <a name="DataDatabricksAccountIamDirectGroupMembersV2" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/account_iam_direct_group_members_v2 databricks_account_iam_direct_group_members_v2}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAccountIamDirectGroupMembersV2(Construct Scope, string Id, DataDatabricksAccountIamDirectGroupMembersV2Config Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2Config">DataDatabricksAccountIamDirectGroupMembersV2Config</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2Config">DataDatabricksAccountIamDirectGroupMembersV2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.resetPageSize">ResetPageSize</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetPageSize` <a name="ResetPageSize" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.resetPageSize"></a>

```csharp
private void ResetPageSize()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatabricksAccountIamDirectGroupMembersV2 resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DataDatabricksAccountIamDirectGroupMembersV2.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DataDatabricksAccountIamDirectGroupMembersV2.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DataDatabricksAccountIamDirectGroupMembersV2.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DataDatabricksAccountIamDirectGroupMembersV2.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataDatabricksAccountIamDirectGroupMembersV2 resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatabricksAccountIamDirectGroupMembersV2 to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatabricksAccountIamDirectGroupMembersV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/account_iam_direct_group_members_v2#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksAccountIamDirectGroupMembersV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.property.directGroupMembers">DirectGroupMembers</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersList">DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.property.groupIdInput">GroupIdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.property.pageSizeInput">PageSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.property.groupId">GroupId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.property.pageSize">PageSize</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `DirectGroupMembers`<sup>Required</sup> <a name="DirectGroupMembers" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.property.directGroupMembers"></a>

```csharp
public DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersList DirectGroupMembers { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersList">DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersList</a>

---

##### `GroupIdInput`<sup>Optional</sup> <a name="GroupIdInput" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.property.groupIdInput"></a>

```csharp
public double GroupIdInput { get; }
```

- *Type:* double

---

##### `PageSizeInput`<sup>Optional</sup> <a name="PageSizeInput" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.property.pageSizeInput"></a>

```csharp
public double PageSizeInput { get; }
```

- *Type:* double

---

##### `GroupId`<sup>Required</sup> <a name="GroupId" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.property.groupId"></a>

```csharp
public double GroupId { get; }
```

- *Type:* double

---

##### `PageSize`<sup>Required</sup> <a name="PageSize" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.property.pageSize"></a>

```csharp
public double PageSize { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksAccountIamDirectGroupMembersV2Config <a name="DataDatabricksAccountIamDirectGroupMembersV2Config" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2Config.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAccountIamDirectGroupMembersV2Config {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    double GroupId,
    double PageSize = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2Config.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2Config.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2Config.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2Config.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2Config.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2Config.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2Config.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2Config.property.groupId">GroupId</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/account_iam_direct_group_members_v2#group_id DataDatabricksAccountIamDirectGroupMembersV2#group_id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2Config.property.pageSize">PageSize</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/account_iam_direct_group_members_v2#page_size DataDatabricksAccountIamDirectGroupMembersV2#page_size}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2Config.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2Config.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2Config.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2Config.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2Config.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2Config.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2Config.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `GroupId`<sup>Required</sup> <a name="GroupId" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2Config.property.groupId"></a>

```csharp
public double GroupId { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/account_iam_direct_group_members_v2#group_id DataDatabricksAccountIamDirectGroupMembersV2#group_id}.

---

##### `PageSize`<sup>Optional</sup> <a name="PageSize" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2Config.property.pageSize"></a>

```csharp
public double PageSize { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/account_iam_direct_group_members_v2#page_size DataDatabricksAccountIamDirectGroupMembersV2#page_size}.

---

### DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembers <a name="DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembers" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembers"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembers.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembers {
    double GroupId,
    double PrincipalId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembers.property.groupId">GroupId</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/account_iam_direct_group_members_v2#group_id DataDatabricksAccountIamDirectGroupMembersV2#group_id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembers.property.principalId">PrincipalId</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/account_iam_direct_group_members_v2#principal_id DataDatabricksAccountIamDirectGroupMembersV2#principal_id}. |

---

##### `GroupId`<sup>Required</sup> <a name="GroupId" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembers.property.groupId"></a>

```csharp
public double GroupId { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/account_iam_direct_group_members_v2#group_id DataDatabricksAccountIamDirectGroupMembersV2#group_id}.

---

##### `PrincipalId`<sup>Required</sup> <a name="PrincipalId" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembers.property.principalId"></a>

```csharp
public double PrincipalId { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/account_iam_direct_group_members_v2#principal_id DataDatabricksAccountIamDirectGroupMembersV2#principal_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersList <a name="DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersList" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersList.get"></a>

```csharp
private DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembers">DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembers</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersList.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembers[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembers">DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembers</a>[]

---


### DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference <a name="DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference.property.externalId">ExternalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference.property.membershipSource">MembershipSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference.property.principalType">PrincipalType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference.property.groupIdInput">GroupIdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference.property.principalIdInput">PrincipalIdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference.property.groupId">GroupId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference.property.principalId">PrincipalId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembers">DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembers</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `ExternalId`<sup>Required</sup> <a name="ExternalId" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference.property.externalId"></a>

```csharp
public string ExternalId { get; }
```

- *Type:* string

---

##### `MembershipSource`<sup>Required</sup> <a name="MembershipSource" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference.property.membershipSource"></a>

```csharp
public string MembershipSource { get; }
```

- *Type:* string

---

##### `PrincipalType`<sup>Required</sup> <a name="PrincipalType" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference.property.principalType"></a>

```csharp
public string PrincipalType { get; }
```

- *Type:* string

---

##### `GroupIdInput`<sup>Optional</sup> <a name="GroupIdInput" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference.property.groupIdInput"></a>

```csharp
public double GroupIdInput { get; }
```

- *Type:* double

---

##### `PrincipalIdInput`<sup>Optional</sup> <a name="PrincipalIdInput" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference.property.principalIdInput"></a>

```csharp
public double PrincipalIdInput { get; }
```

- *Type:* double

---

##### `GroupId`<sup>Required</sup> <a name="GroupId" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference.property.groupId"></a>

```csharp
public double GroupId { get; }
```

- *Type:* double

---

##### `PrincipalId`<sup>Required</sup> <a name="PrincipalId" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference.property.principalId"></a>

```csharp
public double PrincipalId { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembers InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembers">DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembers</a>

---



