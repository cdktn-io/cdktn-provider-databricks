# `dataDatabricksAccountIamDirectGroupMemberV2` Submodule <a name="`dataDatabricksAccountIamDirectGroupMemberV2` Submodule" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMemberV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksAccountIamDirectGroupMemberV2 <a name="DataDatabricksAccountIamDirectGroupMemberV2" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMemberV2.DataDatabricksAccountIamDirectGroupMemberV2"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/account_iam_direct_group_member_v2 databricks_account_iam_direct_group_member_v2}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMemberV2.DataDatabricksAccountIamDirectGroupMemberV2.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAccountIamDirectGroupMemberV2(Construct Scope, string Id, DataDatabricksAccountIamDirectGroupMemberV2Config Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMemberV2.DataDatabricksAccountIamDirectGroupMemberV2.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMemberV2.DataDatabricksAccountIamDirectGroupMemberV2.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMemberV2.DataDatabricksAccountIamDirectGroupMemberV2.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMemberV2.DataDatabricksAccountIamDirectGroupMemberV2Config">DataDatabricksAccountIamDirectGroupMemberV2Config</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMemberV2.DataDatabricksAccountIamDirectGroupMemberV2.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMemberV2.DataDatabricksAccountIamDirectGroupMemberV2.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMemberV2.DataDatabricksAccountIamDirectGroupMemberV2.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMemberV2.DataDatabricksAccountIamDirectGroupMemberV2Config">DataDatabricksAccountIamDirectGroupMemberV2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMemberV2.DataDatabricksAccountIamDirectGroupMemberV2.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMemberV2.DataDatabricksAccountIamDirectGroupMemberV2.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMemberV2.DataDatabricksAccountIamDirectGroupMemberV2.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMemberV2.DataDatabricksAccountIamDirectGroupMemberV2.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMemberV2.DataDatabricksAccountIamDirectGroupMemberV2.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMemberV2.DataDatabricksAccountIamDirectGroupMemberV2.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMemberV2.DataDatabricksAccountIamDirectGroupMemberV2.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMemberV2.DataDatabricksAccountIamDirectGroupMemberV2.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMemberV2.DataDatabricksAccountIamDirectGroupMemberV2.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMemberV2.DataDatabricksAccountIamDirectGroupMemberV2.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMemberV2.DataDatabricksAccountIamDirectGroupMemberV2.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMemberV2.DataDatabricksAccountIamDirectGroupMemberV2.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMemberV2.DataDatabricksAccountIamDirectGroupMemberV2.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMemberV2.DataDatabricksAccountIamDirectGroupMemberV2.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMemberV2.DataDatabricksAccountIamDirectGroupMemberV2.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMemberV2.DataDatabricksAccountIamDirectGroupMemberV2.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMemberV2.DataDatabricksAccountIamDirectGroupMemberV2.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMemberV2.DataDatabricksAccountIamDirectGroupMemberV2.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMemberV2.DataDatabricksAccountIamDirectGroupMemberV2.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMemberV2.DataDatabricksAccountIamDirectGroupMemberV2.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMemberV2.DataDatabricksAccountIamDirectGroupMemberV2.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMemberV2.DataDatabricksAccountIamDirectGroupMemberV2.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMemberV2.DataDatabricksAccountIamDirectGroupMemberV2.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMemberV2.DataDatabricksAccountIamDirectGroupMemberV2.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMemberV2.DataDatabricksAccountIamDirectGroupMemberV2.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMemberV2.DataDatabricksAccountIamDirectGroupMemberV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMemberV2.DataDatabricksAccountIamDirectGroupMemberV2.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMemberV2.DataDatabricksAccountIamDirectGroupMemberV2.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMemberV2.DataDatabricksAccountIamDirectGroupMemberV2.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMemberV2.DataDatabricksAccountIamDirectGroupMemberV2.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMemberV2.DataDatabricksAccountIamDirectGroupMemberV2.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMemberV2.DataDatabricksAccountIamDirectGroupMemberV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMemberV2.DataDatabricksAccountIamDirectGroupMemberV2.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMemberV2.DataDatabricksAccountIamDirectGroupMemberV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMemberV2.DataDatabricksAccountIamDirectGroupMemberV2.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMemberV2.DataDatabricksAccountIamDirectGroupMemberV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMemberV2.DataDatabricksAccountIamDirectGroupMemberV2.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMemberV2.DataDatabricksAccountIamDirectGroupMemberV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMemberV2.DataDatabricksAccountIamDirectGroupMemberV2.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMemberV2.DataDatabricksAccountIamDirectGroupMemberV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMemberV2.DataDatabricksAccountIamDirectGroupMemberV2.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMemberV2.DataDatabricksAccountIamDirectGroupMemberV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMemberV2.DataDatabricksAccountIamDirectGroupMemberV2.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMemberV2.DataDatabricksAccountIamDirectGroupMemberV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMemberV2.DataDatabricksAccountIamDirectGroupMemberV2.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMemberV2.DataDatabricksAccountIamDirectGroupMemberV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMemberV2.DataDatabricksAccountIamDirectGroupMemberV2.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMemberV2.DataDatabricksAccountIamDirectGroupMemberV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMemberV2.DataDatabricksAccountIamDirectGroupMemberV2.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMemberV2.DataDatabricksAccountIamDirectGroupMemberV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMemberV2.DataDatabricksAccountIamDirectGroupMemberV2.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMemberV2.DataDatabricksAccountIamDirectGroupMemberV2.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMemberV2.DataDatabricksAccountIamDirectGroupMemberV2.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMemberV2.DataDatabricksAccountIamDirectGroupMemberV2.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatabricksAccountIamDirectGroupMemberV2 resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMemberV2.DataDatabricksAccountIamDirectGroupMemberV2.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DataDatabricksAccountIamDirectGroupMemberV2.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMemberV2.DataDatabricksAccountIamDirectGroupMemberV2.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMemberV2.DataDatabricksAccountIamDirectGroupMemberV2.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DataDatabricksAccountIamDirectGroupMemberV2.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMemberV2.DataDatabricksAccountIamDirectGroupMemberV2.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMemberV2.DataDatabricksAccountIamDirectGroupMemberV2.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DataDatabricksAccountIamDirectGroupMemberV2.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMemberV2.DataDatabricksAccountIamDirectGroupMemberV2.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMemberV2.DataDatabricksAccountIamDirectGroupMemberV2.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DataDatabricksAccountIamDirectGroupMemberV2.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataDatabricksAccountIamDirectGroupMemberV2 resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMemberV2.DataDatabricksAccountIamDirectGroupMemberV2.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMemberV2.DataDatabricksAccountIamDirectGroupMemberV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatabricksAccountIamDirectGroupMemberV2 to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMemberV2.DataDatabricksAccountIamDirectGroupMemberV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatabricksAccountIamDirectGroupMemberV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/account_iam_direct_group_member_v2#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMemberV2.DataDatabricksAccountIamDirectGroupMemberV2.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksAccountIamDirectGroupMemberV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMemberV2.DataDatabricksAccountIamDirectGroupMemberV2.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMemberV2.DataDatabricksAccountIamDirectGroupMemberV2.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMemberV2.DataDatabricksAccountIamDirectGroupMemberV2.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMemberV2.DataDatabricksAccountIamDirectGroupMemberV2.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMemberV2.DataDatabricksAccountIamDirectGroupMemberV2.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMemberV2.DataDatabricksAccountIamDirectGroupMemberV2.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMemberV2.DataDatabricksAccountIamDirectGroupMemberV2.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMemberV2.DataDatabricksAccountIamDirectGroupMemberV2.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMemberV2.DataDatabricksAccountIamDirectGroupMemberV2.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMemberV2.DataDatabricksAccountIamDirectGroupMemberV2.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMemberV2.DataDatabricksAccountIamDirectGroupMemberV2.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMemberV2.DataDatabricksAccountIamDirectGroupMemberV2.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMemberV2.DataDatabricksAccountIamDirectGroupMemberV2.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMemberV2.DataDatabricksAccountIamDirectGroupMemberV2.property.externalId">ExternalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMemberV2.DataDatabricksAccountIamDirectGroupMemberV2.property.membershipSource">MembershipSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMemberV2.DataDatabricksAccountIamDirectGroupMemberV2.property.principalType">PrincipalType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMemberV2.DataDatabricksAccountIamDirectGroupMemberV2.property.groupIdInput">GroupIdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMemberV2.DataDatabricksAccountIamDirectGroupMemberV2.property.principalIdInput">PrincipalIdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMemberV2.DataDatabricksAccountIamDirectGroupMemberV2.property.groupId">GroupId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMemberV2.DataDatabricksAccountIamDirectGroupMemberV2.property.principalId">PrincipalId</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMemberV2.DataDatabricksAccountIamDirectGroupMemberV2.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMemberV2.DataDatabricksAccountIamDirectGroupMemberV2.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMemberV2.DataDatabricksAccountIamDirectGroupMemberV2.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMemberV2.DataDatabricksAccountIamDirectGroupMemberV2.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMemberV2.DataDatabricksAccountIamDirectGroupMemberV2.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMemberV2.DataDatabricksAccountIamDirectGroupMemberV2.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMemberV2.DataDatabricksAccountIamDirectGroupMemberV2.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMemberV2.DataDatabricksAccountIamDirectGroupMemberV2.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMemberV2.DataDatabricksAccountIamDirectGroupMemberV2.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMemberV2.DataDatabricksAccountIamDirectGroupMemberV2.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMemberV2.DataDatabricksAccountIamDirectGroupMemberV2.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMemberV2.DataDatabricksAccountIamDirectGroupMemberV2.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMemberV2.DataDatabricksAccountIamDirectGroupMemberV2.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `ExternalId`<sup>Required</sup> <a name="ExternalId" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMemberV2.DataDatabricksAccountIamDirectGroupMemberV2.property.externalId"></a>

```csharp
public string ExternalId { get; }
```

- *Type:* string

---

##### `MembershipSource`<sup>Required</sup> <a name="MembershipSource" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMemberV2.DataDatabricksAccountIamDirectGroupMemberV2.property.membershipSource"></a>

```csharp
public string MembershipSource { get; }
```

- *Type:* string

---

##### `PrincipalType`<sup>Required</sup> <a name="PrincipalType" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMemberV2.DataDatabricksAccountIamDirectGroupMemberV2.property.principalType"></a>

```csharp
public string PrincipalType { get; }
```

- *Type:* string

---

##### `GroupIdInput`<sup>Optional</sup> <a name="GroupIdInput" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMemberV2.DataDatabricksAccountIamDirectGroupMemberV2.property.groupIdInput"></a>

```csharp
public double GroupIdInput { get; }
```

- *Type:* double

---

##### `PrincipalIdInput`<sup>Optional</sup> <a name="PrincipalIdInput" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMemberV2.DataDatabricksAccountIamDirectGroupMemberV2.property.principalIdInput"></a>

```csharp
public double PrincipalIdInput { get; }
```

- *Type:* double

---

##### `GroupId`<sup>Required</sup> <a name="GroupId" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMemberV2.DataDatabricksAccountIamDirectGroupMemberV2.property.groupId"></a>

```csharp
public double GroupId { get; }
```

- *Type:* double

---

##### `PrincipalId`<sup>Required</sup> <a name="PrincipalId" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMemberV2.DataDatabricksAccountIamDirectGroupMemberV2.property.principalId"></a>

```csharp
public double PrincipalId { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMemberV2.DataDatabricksAccountIamDirectGroupMemberV2.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMemberV2.DataDatabricksAccountIamDirectGroupMemberV2.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksAccountIamDirectGroupMemberV2Config <a name="DataDatabricksAccountIamDirectGroupMemberV2Config" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMemberV2.DataDatabricksAccountIamDirectGroupMemberV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMemberV2.DataDatabricksAccountIamDirectGroupMemberV2Config.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAccountIamDirectGroupMemberV2Config {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    double GroupId,
    double PrincipalId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMemberV2.DataDatabricksAccountIamDirectGroupMemberV2Config.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMemberV2.DataDatabricksAccountIamDirectGroupMemberV2Config.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMemberV2.DataDatabricksAccountIamDirectGroupMemberV2Config.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMemberV2.DataDatabricksAccountIamDirectGroupMemberV2Config.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMemberV2.DataDatabricksAccountIamDirectGroupMemberV2Config.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMemberV2.DataDatabricksAccountIamDirectGroupMemberV2Config.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMemberV2.DataDatabricksAccountIamDirectGroupMemberV2Config.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMemberV2.DataDatabricksAccountIamDirectGroupMemberV2Config.property.groupId">GroupId</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/account_iam_direct_group_member_v2#group_id DataDatabricksAccountIamDirectGroupMemberV2#group_id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMemberV2.DataDatabricksAccountIamDirectGroupMemberV2Config.property.principalId">PrincipalId</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/account_iam_direct_group_member_v2#principal_id DataDatabricksAccountIamDirectGroupMemberV2#principal_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMemberV2.DataDatabricksAccountIamDirectGroupMemberV2Config.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMemberV2.DataDatabricksAccountIamDirectGroupMemberV2Config.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMemberV2.DataDatabricksAccountIamDirectGroupMemberV2Config.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMemberV2.DataDatabricksAccountIamDirectGroupMemberV2Config.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMemberV2.DataDatabricksAccountIamDirectGroupMemberV2Config.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMemberV2.DataDatabricksAccountIamDirectGroupMemberV2Config.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMemberV2.DataDatabricksAccountIamDirectGroupMemberV2Config.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `GroupId`<sup>Required</sup> <a name="GroupId" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMemberV2.DataDatabricksAccountIamDirectGroupMemberV2Config.property.groupId"></a>

```csharp
public double GroupId { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/account_iam_direct_group_member_v2#group_id DataDatabricksAccountIamDirectGroupMemberV2#group_id}.

---

##### `PrincipalId`<sup>Required</sup> <a name="PrincipalId" id="@cdktn/provider-databricks.dataDatabricksAccountIamDirectGroupMemberV2.DataDatabricksAccountIamDirectGroupMemberV2Config.property.principalId"></a>

```csharp
public double PrincipalId { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/account_iam_direct_group_member_v2#principal_id DataDatabricksAccountIamDirectGroupMemberV2#principal_id}.

---



